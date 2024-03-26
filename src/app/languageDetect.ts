import { useRouter } from 'next/router';

export function getUserLanguage(): string {
    const router = useRouter();
    const { locale } = router;
    return locale || 'default';
}
