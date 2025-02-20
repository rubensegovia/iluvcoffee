import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Event extends mongoose.Document {
  @Prop()
  type: string;
  
  @Prop({ index: true })
  name: string;
  
  @Prop(mongoose.Schema.Types.Mixed)
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
