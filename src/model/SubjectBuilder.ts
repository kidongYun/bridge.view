import SubjectType from './SubjectType'

export class SubjectBuilder {
    private readonly _subject: SubjectType;
    
    constructor() {
        this._subject = new SubjectType("SUBJECT");
    }

    type(type: string): SubjectBuilder {
        this._subject.setType(type);
        return this;
    }

    dateTime(dateTime: string): SubjectBuilder {
        this._subject.setDateTime(dateTime);
        return this;
    }

    id(id: number): SubjectBuilder {
        this._subject.setId(id);
        return this;
    }

    status(status: number): SubjectBuilder {
        this._subject.setStatus(status);
        return this;
    }

    display(display: "NORMAL" | "DETAIL"): SubjectBuilder {
        this._subject.setDisplay(display);
        return this;
    }

    build(): SubjectType {
        return this._subject;
    }
}