import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

@Schema({ versionKey: false, collection: 'users', timestamps: true })
export class User {
  @Prop({ required: true })
  readonly email: string;

  @Prop({ required: true })
  readonly phone: string;

  @Prop({ required: true })
  readonly name: string;

  @Prop({ required: true })
  readonly password: string;

  @Prop({ enum: UserRole, default: UserRole.User })
  readonly role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.loadClass(User);
