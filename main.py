import json

from credentials import BOT_TOKEN, BOT_USERNAME
from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
from datetime import datetime, timedelta
import astrology

bot = Bot(BOT_TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.InlineKeyboardButton('Choose your sign',
                                    web_app=WebAppInfo(url='https://androu2048.github.io/tg_horo/index.html')))

    """
    For future implementation
    
    markup.add(types.InlineKeyboardButton('Check here if you don\'t know your sign',
                                          web_app=WebAppInfo(url='https://androu2048.github.io/tg_horo/calendar.html')))
    """

    await message.answer('Start', reply_markup=markup)


@dp.message_handler(content_types=['web_app_data'])
async def web_app(message: types.Message):
    res = json.loads(message.web_app_data.data)
    present_day = datetime.today()
    forecast_day = present_day

    """
    This part is for purpose altering forecast day from string (yesterday, today, tomorrow) to date
    However this has no meaning at the currently parsed site because of timezone difference
    Plan: find more suitable site
    
    if res['day'] == 'yesterday':
        forecast_day = present_day - timedelta(1)
    print(forecast_day.strftime("%Y-%m-%d"))
    print(astrology.get_horoscope_by_day(astrology.ZODIAC_SIGNS[res['sign']], forecast_day.strftime("%Y-%m-%d")))
    """

    horo = astrology.get_horoscope_by_day(sign=astrology.ZODIAC_SIGNS[res['sign']], day=res['day'])
    await message.answer(horo)

    """ 
    print(res)
    print(present_day)
    print(forecast_day.strftime("%Y-%m-%d"))
    print(horo)
    """

if __name__ == '__main__':
    executor.start_polling(dp)
