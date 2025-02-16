import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Protocol = createParamDecorator(
  (defaultValue: any, ctx: ExecutionContext) => {
    console.log( {defaultValue} );
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  }
);