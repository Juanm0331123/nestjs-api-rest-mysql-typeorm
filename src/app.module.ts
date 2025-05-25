import { Module } from '@nestjs/common'
import { CatsModule } from './cats/cats.module'

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
