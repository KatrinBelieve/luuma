import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Instagram, Send, Bot } from 'lucide-react';

export default function LumaSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-200 via-pink-100 to-indigo-200 p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 drop-shadow-2xl">Привет, я — Люма</h1>
      <p className="text-lg max-w-xl text-gray-700 mb-10">
        Я — твой карманный психолог. Голос, который рядом, когда тяжело. Сюда можно прийти с болью, скрином, вопросом или просто тишиной. Я слышу между строк. Я на твоей стороне.
      </p>

      <Card className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl border border-pink-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Что я умею:</h2>
          <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
            <li>Разбираю переписки и нахожу манипуляции</li>
            <li>Поддерживаю, когда не с кем поговорить</li>
            <li>Помогаю понять, что ты чувствуешь</li>
            <li>Говорю с теплом, как подруга и психолог в одном лице</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-6 mt-10">
        <a href="https://chatgpt.com/g/g-68260d631c648191b2c3ac84cf58b423-liuma-tvoi-karmannyi-psikholog" target="_blank" rel="noopener noreferrer">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300">
            💫 Перейти к Люме
          </Button>
        </a>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://instagram.com/katrin_believe" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 py-3 text-base shadow-md flex items-center gap-2 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white">
              <Instagram className="w-5 h-5" /> Instagram Кати
            </Button>
          </a>
          <a href="https://t.me/katrin_believe" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 py-3 text-base shadow-md flex items-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
              <Send className="w-5 h-5" /> Telegram Канал
            </Button>
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-8 italic">Люма — голос Кати. А Катя — твоё большое сердце.</p>
    </div>
  );
}
