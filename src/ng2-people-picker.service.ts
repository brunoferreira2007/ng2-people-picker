import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import pnp from 'sp-pnp-js';
import { WebEnsureUserResult, HttpClient } from 'sp-pnp-js';

pnp.setup({
  sp: {
      headers: {
          'Accept': 'application/json; odata=verbose'
      }
  }
});
@Injectable()
export class PeoplePickerService {

  setBaseUrl(url:string){
    pnp.setup({
      sp: {
        headers: {
            'Accept': 'application/json; odata=verbose'
        },
        baseUrl: url
      }
    })
  }

  getPeoplePicker(searchString: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const httpClient = new HttpClient();
      pnp.sp.web.get().then(web => {

        const endpointUrl =
        `${web.Url}/_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerSearchUser`;
        httpClient
        .post(endpointUrl, {
          headers: {
            Accept: `application/json; odata=verbose`
          },
          body: JSON.stringify({
            queryParams: {
              __metadata: {
                type: 'SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters'
              },
              AllowEmailAddresses: true,
              AllowMultipleEntities: false,
              AllUrlZones: false,
              MaximumEntitySuggestions: 15,
              PrincipalSource: 5,
              PrincipalType: 5,
              QueryString: searchString
            }
          })
        })
        .then(response => {
          resolve(response.json());
        }).catch(error => reject(error));
      });

    });
  }
  getUserByRacf(racf: string): Promise<WebEnsureUserResult> {
    return new Promise((resolve, reject) => {
      pnp.sp.web.ensureUser(racf).then(user => resolve(user));
    });
  }
}
