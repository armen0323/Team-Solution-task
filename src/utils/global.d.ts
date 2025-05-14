
// TODO make all custom function implementation in the global.context.ts file there have example
interface Date {
  add(value: number, unit: 'days' | 'months' | 'years'): Date;
  subtract(value: number, unit: 'days' | 'months' | 'years'): Date;
  sum(otherDate: Date): Date;
  difference(otherDate: Date): number;
  eachDayOfInterval(endDate: Date): Array<Date>;
  log(): undefined
};

// TODO implement promise.all function but with small changes
// so example pas argument -> [promise, promise] call second promise after first promise resolving
interface PromiseConstructor {
    allWithMode<T>(
      promises: Array<Promise<T> | ((res?: any) => Promise<T>) >,
      mode: 'recursive'
    ): Promise<T[]>;
};

type Size = "small" | "middle" | "large";
type Variant = "primary" | "secondary";

type ErrorState = {
    message: string;
    success: boolean;
    errors?: {
        [key: string]: string[];
    };
}

interface IUserPaginationResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: {
        url: string;
        text: string;
    };
}


interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
