/** Secondary speaker for joint sessions (e.g. co-presenters). */
export interface IAgendaCoSpeaker {
  readonly name: string;
  readonly position: string;
  readonly image: string;
}

export interface IAgenda {
  readonly title: string;
  readonly speakerName: string;
  readonly speakerPosition: string;
  readonly speakerImage: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly description: string;
  readonly coSpeaker?: IAgendaCoSpeaker;
}
