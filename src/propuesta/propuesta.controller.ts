import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { CrearPropuestaDTO } from './dto/CreatePropuesta.dto';
import { Propuesta } from './propuesta.entity';

@Controller('propuestas')
export class PropuestaController {

    constructor(private propuestaService: PropuestaService) { }

    @Get()
    getReservasByParqueadero(){
        return this.propuestaService.findAllPropuesta()
    }

    @Get(':id')
    async getPropuestaById(@Param('id', ParseIntPipe) id: number): Promise<Propuesta> {
        return await this.propuestaService.findPropuestaById(id)
    }

    @Post()
    async crearPropuesta(@Body() propuesta: CrearPropuestaDTO): Promise<Propuesta> {
        return await this.propuestaService.crearPropuesta(propuesta)
    }

    @Delete(':id')
    async deletePropuestaById(@Param('id', ParseIntPipe) id: number){
        return await this.propuestaService.deletePropuestaById(id)
    }

}
