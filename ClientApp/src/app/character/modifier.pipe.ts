import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifier'
})
export class ModifierPipe implements PipeTransform {

  transform(value: number): string {
    return (value >= 10 ? "+" : "-") + (Math.abs(this.transformAsNumber(value)));
  }

  transformAsNumber(value: number): number {
    return Math.floor(value / 2) - 5;
  }

  transformMods(modValue: number): string {
    return (modValue >= 0 ? "+" : "-") + Math.abs(modValue)
  }

  transformWithAddition(value: number, addition: number): string {
    value = this.transformAsNumber(value);
    value += addition;
    return (value >= 0 ? "+" : "-") + Math.abs(value);
  }
}
