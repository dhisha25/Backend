import { Schema, Prop,SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './UserSetting.schema';

@Schema()
export class User {
 
    @Prop( {required:true})
    Name:string;

    @Prop({ unique:true,required:true})
    EmailAddress:string;

    @Prop({unique:true,required:true})
    MobileNumber:number;
    @Prop({required:true})
    CollegeName:string;
    @Prop({required:true})
      YearOfGraduation:number;

    // @Prop({type:mongoose.Schema.Types.ObjectId,ref:'UserSetting'})
    // Settings?:UserSettings;

}

 export const UserSchema=SchemaFactory.createForClass(User);
 
