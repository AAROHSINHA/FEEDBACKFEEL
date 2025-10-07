export interface FeedbackDataInterface {
  feedback_text: string;
  sentiment: string;
  confidence: number;
  created_at: string;
  spam: boolean;
}

export interface DashboardDataInterface {
  data: FeedbackDataInterface[];
  error: boolean;
  loading: boolean;
}
