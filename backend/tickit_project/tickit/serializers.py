from rest_framework import serializers
from .models import Venue, Event

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(
        view_name='event_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model= Venue
        fields = ('name', 'location', 'occupancy', 'photo_url', 'events')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    venues = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',
        read_only=True
    )

    class Meta:
        model= Event
        fields = ('venues', 'name', 'artist', 'date', 'price', 'image_url', 'tickets_available')