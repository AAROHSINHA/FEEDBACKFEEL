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

export interface statsDataInterface {
  sentiment_percentage: number;
  total_feedbacks: number;
  positive_feedbacks: number;
  neutral_feedbacks: number;
  negative_feedbacks: number;
  potential_spam_encountered: number;
}
