class Choice {
    label: string;
    value: string;
    selected: boolean;
}

class Jump {
    conditions: Array<any>;
    destination: any;
}

export class Question {
    question_type: string;
    identifier: string;
    headline: string;
    description: string;
    required: boolean;
    multiline?: string;
    multiple?: string;
    choices?: Choice[];
    jumps?: Jump[]

}