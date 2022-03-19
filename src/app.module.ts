import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test', {
      connectionName: 'con1',
      connectionFactory: function (conn) {
        console.log('conn');
        conn.on('connected', () => console.log('connected'));
        return conn;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
