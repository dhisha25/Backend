import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateUserSettingsDto{
    @IsOptional()
    @IsBoolean()
receiveNotification?:boolean;
@IsOptional()
@IsBoolean()
receiveEmail?:boolean;
@IsOptional()
@IsBoolean()
receiveSms?:boolean;
}
export class CreateUserDto{
   
    @IsNotEmpty()
    @IsString()
   readonly Name?:string;

    @IsString()
    @IsNotEmpty()
   

   readonly EmailAddress?:string;
    @IsNumber()
    @IsNotEmpty()
   

   readonly MobileNumber?:number;
    @IsString()
    @IsNotEmpty()
   

   readonly CollegeName?:string;
    @IsNumber()
    @IsNotEmpty()
   

    readonly YearOfGraduation?:number;
   
}
