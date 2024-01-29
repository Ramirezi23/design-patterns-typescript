import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    const itensity = this.Light.increaseIntensity();
    console.log(`Intensidade da ${this.Light.name} é ${itensity}`);
  }
  undo(): void {
    const itensity = this.Light.decreaseIntensity();
    console.log(`Intensidade da ${this.Light.name} é ${itensity}`);
  }
}
