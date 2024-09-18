export interface Ticket {
   id: string;
   title: string;
   priority: number;
   userId: string;
   user: User | undefined;
   status: string;
   tag: string[];
}

export interface User {
   id: string;
   name: string;
   available: boolean;
}

export interface Priority {
   name: string;
   priority: number;
}

export interface APIResponse {
   tickets: Ticket[];
   users: User[];
}
