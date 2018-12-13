import { IValueLikePlugin, ICloneContext } from "change-checker";

export class RegExpPlugin implements IValueLikePlugin<RegExp> {
    public name: string = "RegExpPlugin";
    public isValueLikePlugin: true = true;

    constructor(private compareFlags: boolean = false) {
    }

    public clone(_: ICloneContext, instance: RegExp): RegExp {
        return new RegExp(instance, instance.flags);
    }

    public equals(left: RegExp, right: RegExp): boolean {
        return String(left) === String(right) && (this.compareFlags ? this.flagsEqual(left, right) : true);
    }

    public isMatch(instance: any): instance is RegExp {
        return instance instanceof RegExp;
    }

    private flagsEqual(left: RegExp, right: RegExp): boolean {
        const leftFlags = left.flags.split("");
        const rightFlags = right.flags.split("");
        if (leftFlags.length !== rightFlags.length) {
            return false;
        }

        for (const flag of leftFlags) {
            if (rightFlags.indexOf(flag) === -1) {
                return false;
            }
        }

        return true;
    }
}

declare module "change-checker/types/ValueLikeRegistry" {
    export interface IValueLikeRegistry {
        regExp: RegExp;
    }
}
