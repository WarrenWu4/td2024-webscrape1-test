import requests
from bs4 import BeautifulSoup

# Must check the POST and GET requests to route to the correct URL
login_url = "http://localhost:3000/login"
secure_url = "http://localhost:3000/scrape"

# Pass in a payload but must view the payload form data in networks
payload = {
    'username' : 'datathon_participant',
    'password' : 'webscrape!',
    'secret' : 'selenium_secret'
}

# POST request to login
r = requests.post(login_url, data=payload)

# GET request to the scrape page url
r2 = requests.get(secure_url)

# Parse the HTML content
soup = BeautifulSoup(r2.content, 'html.parser')
table = soup.find('table')
rows = table.find_all('tr')

total_hr = 0
for row in rows[1:]:
    cells = row.find_all('td')
    row_data = [cell.text for cell in cells]
    total_hr += int(row_data[-2])
    # print(row_data)
    # print('-------------------')

# ANSWER IS 15258
print(total_hr)