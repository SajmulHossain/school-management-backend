export enum BoardExamTypes {
    jsc = "jsc",
    ssc = "ssc",
}

export interface IBoardResult {
    year: number;
    pass_rate: number;
    failed: number;
    passed: number;
    totalAttended: number;
    gpa_5: number;
    exam_type: BoardExamTypes
}