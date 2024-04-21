from django.db import models

class Size(models.Model):
    size = models.CharField(max_length=20)

    class Meta:
        verbose_name = 'Size'
        verbose_name_plural = 'Sizes'

    def __str__(self):
        return self.size

class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    def __str__(self):
        return self.name

class Hat(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='hat_images/')
    gender = models.CharField(max_length=20)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sizes = models.ManyToManyField(Size)

    class Meta:
        verbose_name = 'Hat'
        verbose_name_plural = 'Hats'
    
    def __str__(self):
        return self.name
    
class Top(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='top_images/')
    gender = models.CharField(max_length=20)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sizes = models.ManyToManyField(Size)

    class Meta:
        verbose_name = 'Top'
        verbose_name_plural = 'Tops'
    
    def __str__(self):
        return self.name
    
    
class Shoe(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='shoe_images/')
    gender = models.CharField(max_length=20)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sizes = models.ManyToManyField(Size)

    class Meta:
        verbose_name = 'Shoe'
        verbose_name_plural = 'Shoes'
    
    def __str__(self):
        return self.name

class Pant(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    color = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='pant_images/')
    gender = models.CharField(max_length=20)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sizes = models.ManyToManyField(Size)
    
    class Meta:
        verbose_name = 'Pant'
        verbose_name_plural = 'Pants'

    def __str__(self):
        return self.name