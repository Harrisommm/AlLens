export async function translateTextAsync(text: string, targetLocale: string) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (targetLocale === 'ko') {
    return '성분: 물, 사탕수수 설탕, 탈지분유, 아몬드 추출물, 바닐라, 대두 레시틴.';
  }
  return text;
}
