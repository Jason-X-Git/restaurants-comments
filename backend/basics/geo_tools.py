import traceback

import googlemaps
from datetime import datetime

import requests
from geopy.geocoders import Nominatim
from decouple import config
import os

geolocator = Nominatim()

google_key = config('GOOGLE_KEY', default=None)

os.environ["GOOGLE_API_KEY"] = google_key


def get_lonlat(address):
    try:

        gmaps = googlemaps.Client(key=google_key)

        # Geocoding an address
        geocode_result = gmaps.geocode(address)

        if len(geocode_result) > 0:
            location = geocode_result[0]['geometry']['location']
            lat = location['lat']
            long = location['lng']
        else:
            lat, long = None, None

        return long, lat

    except:
        traceback.print_exc()
        raise


def lonlat(address):
    try:
        address = address.replace(' ', '+')
        response = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address=%s' % address)
        resp_json_payload = response.json()
        # return resp_json_payload['results'][0]['geometry']['location']
        return resp_json_payload['results'][0]
    except:
        traceback.print_exc()


def lonlat2(address):
    location = geolocator.geocode(address)
    try:
        return (location.longitude, location.latitude)
    except:
        traceback.print_exc()


def lonlat3(address):
    try:
        import requests

        address = address.replace(' ', '+')

        GOOGLE_MAPS_API_URL = 'http://maps.googleapis.com/maps/api/geocode/json'

        params = {
            'address': address,
            'sensor': 'false',
            'region': 'Canada'
        }

        # Do the request and get the response data
        req = requests.get(GOOGLE_MAPS_API_URL, params=params)
        res = req.json()

        # Use the first result
        result = res['results'][0]

        geodata = dict()
        geodata['lat'] = result['geometry']['location']['lat']
        geodata['lng'] = result['geometry']['location']['lng']
        geodata['address'] = result['formatted_address']

        print('{address}. (lat, lng) = ({lat}, {lng})'.format(**geodata))

    except:
        traceback.print_exc()
