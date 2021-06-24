from flask import Flask

app = Flask(__name__)

DB = {
  'pets': {
    '1': {
        'name': 'Francis Pierre',
        'type': 'Cat',
        'breed': 'American Shorthair',
        'age': '3',
        'notes' : 'Distillery tumeric mixtape, single-origin coffee try-hard cray quinoa lyft cloud bread sriracha marfa meh. Pop-up blog stumptown taxidermy hot chicken single-origin coffee paleo banjo affogato shaman. Flexitarian four loko neutra schlitz hell of, edison bulb cloud bread. Hella unicorn mlkshk hammock truffaut jianbing chia marfa DIY kogi selvage single-origin coffee.',
      },
      '2': {
        'name': 'Chunks',
        'type': 'Dog',
        'breed': 'Samoyed',
        'age': '4',
        'notes' : 'I\'m baby plaid butcher actually brooklyn irony everyday carry wolf succulents vaporware tacos crucifix post-ironic mustache migas. Hot chicken bicycle rights cliche, butcher tbh tumeric fixie direct trade cardigan meditation pinterest. La croix cardigan YOLO, vegan raclette dreamcatcher ethical. Wolf quinoa live-edge taiyaki cardigan beard. XOXO humblebrag forage organic. Migas ennui af, affogato stumptown hot chicken photo booth slow-carb yuccie.',
      },
      '3': {
        'name': 'Saint Claire',
        'type': 'Exotic',
        'breed': 'Sea Otter',
        'age': '1',
        'notes' : 'Craft beer palo santo yuccie kombucha stumptown pour-over, brooklyn gastropub cardigan air plant 8-bit quinoa dreamcatcher shabby chic. Keffiyeh 3 wolf moon asymmetrical, keytar single-origin coffee pabst fingerstache. Post-ironic retro man bun, chambray fixie bicycle rights tbh food truck. Marfa kogi tumblr, williamsburg affogato tousled bespoke flexitarian wayfarers flannel.',
      },
  }
}

@app.route("/api/v1/pets")
def get_all_pets():
    return DB['pets']

@app.route("/api/v1/pets/<pet_id>")
def get_pet(pet_id):
    return DB['pets'][pet_id]