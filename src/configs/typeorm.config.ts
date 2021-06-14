import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb://localhost/school',
  synchronize: true,
  useUnifiedTopology: true,
  autoLoadEntities: true,
};
