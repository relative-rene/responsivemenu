import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MessageService } from './message.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  id: number;
  editMode = false;
  messageForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
        this.initForm();
  }

  onSubmit() {
      this.messageService.addMessage(this.messageForm.value);
      console.log('message added', this.messageForm.value, this.id);
      console.log(this.messageService.getMessages());
      this.initForm();
    }

    getMessages() {
      console.log(this.messageService.getMessages());
    }

  private initForm() {
    let messageEmail = '';
    let messageDescription = '';
    this.messageForm = new FormGroup({
      'email': new FormControl(messageEmail, Validators.required),
      'description': new FormControl(messageDescription, Validators.required)
    });
  }
}
