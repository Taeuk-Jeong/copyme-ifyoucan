import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return 'hello, aws s3';
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('image'))
  // async uploadMediaFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  //   return await this.awsService.uploadFileToS3('copyme', file);
  // }

  // @Post('copyme')
  // getImageUrl(@Body('key') key: string) {
  //   return this.awsService.getAwsS3FileUrl(key);
  // }
}
