import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [CpuService],
  controllers: [CpuController],
  imports: [PowerModule]
})
export class CpuModule { }
