from flask import Flask, make_response
import requests
import os
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/site/githubwidget')
def github_widget():
    payload = {
        'query': """query {
          user(login: "lletfrix") {
            name
            avatarUrl
            bio
            followers {
              totalCount
            }
            following {
              totalCount
            }
            pinnedItems(first: 10) {
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
                      edges {
                        node {
                          name
                          color
                        }
                      }
                    }
                  }
                }
              }
            }
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  firstDay
                  contributionDays {
                    contributionCount
                  }
                }
              }
            }
          }
        }
        """
    }

    headers = {
        "Authorization": "bearer " + os.environ.get("GITHUB_TOKEN")
    }

    r = requests.post('https://api.github.com/graphql', json=payload, headers=headers)
    response = make_response(r.json())
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
