import { InMemoryDbService } from 'angular-in-memory-web-api';
import { QuestionsDb } from './questionairs';


export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            'questions': QuestionsDb.questions.questionnaire.questions
        };
    }
}
