import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {

    transform(value: string, replaceFrom: string, replaceTo: string) {
        return value.replace(replaceFrom, replaceTo);
    }
}