export interface ICalibrationForm {
    id;
    name;
    description;
    calibrationFrequencyCronExpression;
}

export class PrimeCalibrationForm implements ICalibrationForm {

    constructor(public id,
                public name,
                public description,
                public calibrationFrequencyCronExpression) {
    }
}