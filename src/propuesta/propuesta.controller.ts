import { Controller, Get } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';

@Controller('propuesta')
export class PropuestaController {

    constructor(private propuestaService: PropuestaService) { }

    @Get()
    getReservasByParqueadero(){
        return this.propuestaService.findAllPropuesta()
    }

}
