import {Pipe, PipeTransform} from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
@Pipe({name: 'image'})
export class ImageUrlPipe implements PipeTransform {
    transform(value:string):string {
        if(value != null) {
            var url_stripped = value.substring(10);
            return "https://app.eurofurence.org/api/" + url_stripped;
        } else {
            return ""
        }
    }
}