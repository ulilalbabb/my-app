export type AuthType = {
    type: string;
    placeholder: string;
    name: string;
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    label?: string
}