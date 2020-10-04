import CellType from './CellType';

export default class SubjectType extends CellType {
    id: number;
    status: number;

    constructor(type: string) {
        super(type)
        this.id = -1;
        this.status = 0;
    }
}

export class SubjectBuilder {
    private readonly _subject: SubjectType;
    
    constructor() {
        this._subject = new SubjectType("SUBJECT");
    }

    type(type: string): SubjectBuilder {
        this._subject.type = type;
        return this;
    }

    dateTime(dateTime: string): SubjectBuilder {
        this._subject.dateTime = dateTime;
        return this;
    }

    id(id: number): SubjectBuilder {
        this._subject.id = id;
        return this;
    }

    status(status: number): SubjectBuilder {
        this._subject.status = status;
        return this;
    }

    build(): SubjectType {
        return this._subject;
    }
}