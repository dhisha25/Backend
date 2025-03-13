import { Controller,Post,Body,Put, UsePipes, ValidationPipe ,Get, Param, HttpException, Delete,HttpStatus} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UserModule } from "./users.module";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import mongoose from "mongoose";

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Post()
    @UsePipes(new ValidationPipe())
createUser(@Body() createUserDto:CreateUserDto){
console.log(createUserDto);
return this.usersService.createUser(createUserDto);
}
@Get()
getUsers(){
    return this.usersService.getUsers();

}
@Get(':_id')
 async getUserId(@Param('_id') _id:string) {
    const isValid = mongoose.Types.ObjectId.isValid(_id);
    if(!isValid) throw new HttpException('User not found',404)
const findUser = await this.usersService.getUserById(_id);
if(!findUser) throw new HttpException('User not found', 404);
return findUser;
}
@Put(':_id')
@UsePipes(new ValidationPipe())
 async updateUser(@Param('_id') _id:string, @Body() updateUserDto:UpdateUserDto)
{
    const isValid = mongoose.Types.ObjectId.isValid(_id);
    if(!isValid) throw new HttpException('Invalid ID',400);
    const updateUser=await this.usersService.updateUser(_id,updateUserDto);
    if(!updateUser) throw new HttpException('User not found',404);
    return updateUser;
}
// @Delete(':_id')
//  async deleteUser(@Param('_id') _id:string){
//     const isValid=mongoose.Types.ObjectId.isValid(_id);
//     if(!isValid) throw new HttpException('Invalid ID',400);
//     const deleteUser= await this.usersService.deleteUser(_id);
//     console.log(deleteUser);
// }

@Delete(':_id')
async deleteUser(@Param('_id') _id: string) {
  const isValid = mongoose.Types.ObjectId.isValid(_id);
  if (!isValid) throw new HttpException('Invalid ID', 400);

  const deletedUser = await this.usersService.deleteUser(_id);
  if (!deletedUser) throw new HttpException('User not found', 404);

  // Return a proper JSON response
  return { message: 'User deleted successfully', user: deletedUser };
}

}





