export function cn(classMap: Record<string, boolean | undefined | null>): string {
    return Object.entries(classMap)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key)
        .join(' ');
}