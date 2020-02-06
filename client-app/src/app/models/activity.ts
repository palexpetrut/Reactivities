export interface IActivity {
    id: string;
    title: string; 
    description: string;
    category: string;
    date: Date;
    city: string;
    venue: string;
}

// using an interface , not a class (class gets transpiled into js, the interface doesn't)
// used solely for type checking