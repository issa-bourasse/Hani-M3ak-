import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, UserPlus, Star, Car, TrendingUp } from "lucide-react"

export default function DriversPage() {
  const drivers = [
    {
      id: "DRV-001",
      name: "Mohamed Salah",
      avatar: "/drivers/mohamed.jpg",
      phone: "+216 98 123 456",
      vehicle: "Toyota Corolla 2022",
      plate: "TUN 1234",
      rating: 4.9,
      trips: 1243,
      earnings: "$12,450",
      status: "online",
      location: "Downtown, Tunis"
    },
    {
      id: "DRV-002",
      name: "Youssef Mansour",
      avatar: "/drivers/youssef.jpg",
      phone: "+216 98 234 567",
      vehicle: "Hyundai Elantra 2021",
      plate: "TUN 5678",
      rating: 4.8,
      trips: 987,
      earnings: "$9,870",
      status: "online",
      location: "Carthage, Tunis"
    },
    {
      id: "DRV-003",
      name: "Karim Benzema",
      avatar: "/drivers/karim.jpg",
      phone: "+216 98 345 678",
      vehicle: "Peugeot 508 2023",
      plate: "TUN 9012",
      rating: 4.95,
      trips: 1567,
      earnings: "$15,670",
      status: "busy",
      location: "On trip to Airport"
    },
    {
      id: "DRV-004",
      name: "Rami Malek",
      avatar: "/drivers/rami.jpg",
      phone: "+216 98 456 789",
      vehicle: "Renault Megane 2022",
      plate: "TUN 3456",
      rating: 4.7,
      trips: 756,
      earnings: "$7,560",
      status: "offline",
      location: "Last seen: Sfax"
    },
    {
      id: "DRV-005",
      name: "Hassan Ali",
      avatar: "/drivers/hassan.jpg",
      phone: "+216 98 567 890",
      vehicle: "Volkswagen Passat 2021",
      plate: "TUN 7890",
      rating: 4.85,
      trips: 1123,
      earnings: "$11,230",
      status: "online",
      location: "Hammamet Beach"
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'gradient-success text-white'
      case 'busy':
        return 'bg-accent text-white'
      case 'offline':
        return 'bg-muted text-muted-foreground'
      default:
        return ''
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Drivers</h1>
          <p className="text-muted-foreground mt-1">Manage driver accounts and performance</p>
        </div>
        <Button className="gradient-primary text-white gap-2">
          <UserPlus className="h-4 w-4" />
          Add Driver
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Drivers
            </CardTitle>
            <Car className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-green-500 mt-1">+12 this week</p>
          </CardContent>
        </Card>

        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Online Now
            </CardTitle>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground mt-1">27.7% of total</p>
          </CardContent>
        </Card>

        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Rating
            </CardTitle>
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.82</div>
            <p className="text-xs text-green-500 mt-1">+0.05 this month</p>
          </CardContent>
        </Card>

        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Earnings
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$56,780</div>
            <p className="text-xs text-green-500 mt-1">+15.3% this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, phone, or vehicle..."
            className="pl-10 glass-light dark:glass"
          />
        </div>
      </div>

      {/* Drivers Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {drivers.map((driver) => (
          <Card key={driver.id} className="glass-light dark:glass hover:glow-primary transition-all duration-300 animate-scale-in">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={driver.avatar} alt={driver.name} />
                    <AvatarFallback className="gradient-primary text-white">
                      {driver.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{driver.name}</h3>
                    <p className="text-sm text-muted-foreground">{driver.id}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(driver.status)}>
                  {driver.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact */}
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{driver.phone}</p>
              </div>

              {/* Vehicle */}
              <div>
                <p className="text-sm text-muted-foreground">Vehicle</p>
                <p className="font-medium">{driver.vehicle}</p>
                <p className="text-sm text-muted-foreground">Plate: {driver.plate}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{driver.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trips</p>
                  <p className="font-semibold">{driver.trips}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Earnings</p>
                  <p className="font-semibold text-green-500">{driver.earnings}</p>
                </div>
              </div>

              {/* Location */}
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{driver.location}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

