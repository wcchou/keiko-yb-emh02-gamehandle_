//% color="#C814B8" weight=27 icon="\uf11b"
namespace kGameHandle {
    //% 
    export enum RockerState {
        Unknown = 0,
        Up,
        Down,
        Left,
        Right,
        Pressed
    }

    //% blockId=kGameHandle block="Rocker|value %value"
    //% weight=96
    //% blockGap=10
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Rocker( state: RockerState ): boolean {
        let x = pins.analogReadPin(AnalogPin.P1);
        let y = pins.analogReadPin(AnalogPin.P2);
        let z = pins.analogReadPin(AnalogPin.P8);

        let rockerState = RockerState.Unknown;

        if (x < 200) {
            rockerState = RockerState.Up
        }
        else if (x > 900) {
            rockerState = RockerState.Down;
        }
        else {
            if (y < 200) {
                rockerState = RockerState.Right;
            }
            else if (y > 900) {
                rockerState = RockerState.Left;
            }
        }

        if (z == 0) {
            rockerState = RockerState.Pressed;
        }

        if (rockerState == state) {
            return true;
        }

        return false;
    }
}