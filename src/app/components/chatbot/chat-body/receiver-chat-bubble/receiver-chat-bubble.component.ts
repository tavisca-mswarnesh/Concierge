import { Component, OnInit,DoCheck } from '@angular/core';
import { DialogflowApiKeyServices } from 'src/app/services/dialogflow.service';
import {ChatReply} from 'src/app/services/chatbot.service';
import {Ichat} from 'src/app/components/chatbot/Ichat';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-receiver-chat-bubble',
  templateUrl: './receiver-chat-bubble.component.html',
  styleUrls: ['./receiver-chat-bubble.component.css']
})
export class ReceiverChatBubbleComponent implements OnInit {

  //constructor(private DialogflowApiKeyService: DialogflowApiKeyServices) {
    constructor(private chatReply: ChatReply) {
  }

  chatKey : JSON;
  
  
  ngOnInit():void{
    
    console.log("value");
    //this.DialogflowApiKeyService.getKey().subscribe(val => this.chatKey=val);
    this.chatReply.getKey().subscribe(val => this.chatKey=val);
    console.log(this.chatKey);
  }

}
