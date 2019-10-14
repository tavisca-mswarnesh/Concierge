import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChatbotComponent } from "./components/chatbot/chatbot.component";
import { ChatHeaderComponent } from "./components/chatbot/chat-header/chat-header.component";
import { ChatBodyComponent } from "./components/chatbot/chat-body/chat-body.component";
import { ChatInputComponent } from "./components/chatbot/chat-input/chat-input.component";
import { LauncherComponent } from "./components/launcher/launcher.component";
import { HeaderComponent } from "./components/launcher/header/header.component";
import { FormComponent } from "./components/launcher/form/form.component";
import { SenderChatBubbleComponent } from "./components/chatbot/chat-body/sender-chat-bubble/sender-chat-bubble.component";
import { ReceiverChatBubbleComponent } from "./components/chatbot/chat-body/receiver-chat-bubble/receiver-chat-bubble.component";
import { HttpClientModule } from '@angular/common/http';  

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatInputComponent,
    LauncherComponent,
    HeaderComponent,
    FormComponent,
    SenderChatBubbleComponent,
    ReceiverChatBubbleComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
