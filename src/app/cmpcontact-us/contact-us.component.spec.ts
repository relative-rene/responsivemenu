import { ContactUsComponent } from './contact-us.component';
import { MessageService } from '../_services/message.service';

describe('ContactUsComponent', () => {
    let component: ContactUsComponent;
    let service: MessageService;
    beforeEach(() => {
        service = new MessageService();
        component = new ContactUsComponent(service);
    });
    
    it('should create component',() => {
        expect(service).toContain.bind(this,[]);
    });
});
