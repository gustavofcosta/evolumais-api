import { PartialType } from '@nestjs/mapped-types';
import { CreateContacDto } from './create-contac.dto';

export class UpdateContacDto extends PartialType(CreateContacDto) {}
