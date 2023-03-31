from django.db import models

# Create your models here.

class Venue(models.Model):
    name = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    occupancy = models.IntegerField()
    photo_url = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name='events')
    name = models.CharField(max_length=1000)
    artist = models.CharField(max_length=1000)
    date = models.DateField()
    price = models.CharField(max_length=100)
    image_url = models.CharField(max_length=1000)
    tickets_available = models.IntegerField()

    def __str__(self):
        return self.name






