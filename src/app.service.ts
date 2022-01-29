import { Injectable } from '@nestjs/common';

var info: any = [{
  radios: [{
    Get: [{
      name: 'findAllRadios',
      description: 'affiche une liste de radio.',
      param_url: '',
      url_exemple: 'https://nestradio.herokuapp.com/radios',
      response: {
        id: 'string',
        name: 'string',
        url_flux: 'string',
        url_flux_secondary: 'string',
        url_img: 'string',
      },
    }, {
      name: 'findOneRadio',
      description: 'affiche une radio par id.',
      param_url: 'id',
      url_exemple: 'https://nestradio.herokuapp.com/radios/1',
      response: {
        id: 'string',
        name: 'string',
        url_flux: 'string',
        url_flux_secondary: 'string',
        url_img: 'string',
      },
    }, {
      name: 'findAllOrderBy',
      description: 'affiche la liste des radios par ordre ascent (asc) ou descendant (desc).',
      param_url: 'asc or desc',
      url_exemple: 'https://nestradio.herokuapp.com/radios/order/asc',
      response: {
        id: 'string',
        name: 'string',
        url_flux: 'string',
        url_flux_secondary: 'string',
        url_img: 'string',
      },
    }],
    Post: [{
      name: 'createRadio',
      description: 'affiche la liste des radios trier par nom (name) en ordre ascent (asc) ou descendant (desc).',
      url_exemple: 'https://nestradio.herokuapp.com/radios',
      param_body: {
        name: 'string',
        url_flux: 'string',
        url_flux_secondary: 'string',
        url_img: 'string ou null',
      }
    }],
    Patch: [{
      name: 'updateRaido',
      description: 'MAJ du contenu de la raido par id.',
      param_url: 'id',
      url_exemple: 'https://nestradio.herokuapp.com/radios/1',
      param_body: {
        name: 'string',
        url_flux: 'string',
        url_flux_secondary: 'string',
        url_img: 'string ou null',
      }
    }],
    Delete: [{
      name: 'removeRadio',
      description: 'supprime une raido par id.',
      param_url: 'id',
      url_exemple: 'https://nestradio.herokuapp.com/radios/1',
    }],
  }]

}]

@Injectable()
export class AppService {
  getHello(): any {
    return info;
  }
}