import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Users, Star, MapPin, DollarSign } from "lucide-react"

export default function RidersPage() {
  const riders = [
    {
      id: "RDR-001",
      name: "Ahmed Ben Ali",
      avatar: "/riders/ahmed.jpg",
      email: "ahmed@example.com",
      phone: "+216 98 111 222",
      rating: 4.8,
      trips: 45,
      spent: "$562.50",
      joined: "Jan 2024",
      status: "active",
      lastTrip: "2 hours ago"
    },
    {
      id: "RDR-002",
      name: "Fatima Hassan",
      avatar: "/riders/fatima.jpg",
      email: "fatima@example.com",
      phone: "+216 98 222 333",
      rating: 4.9,
      trips: 67,
      spent: "$835.75",
      joined: "Dec 2023",
      status: "active",
      lastTrip: "Just now"
    },
    {
      id: "RDR-003",
      name: "Sara Ibrahim",
      avatar: "/riders/sara.jpg",
      email: "sara@example.com",
      phone: "+216 98 333 444",
      rating: 4.7,
      trips: 32,
      spent: "$400.00",
      joined: "Feb 2024",
      status: "active",
      lastTrip: "5 hours ago"
    },
    {
      id: "RDR-004",
      name: "Omar Khaled",
      avatar: "/riders/omar.jpg",
      email: "omar@example.com",
      phone: "+216 98 444 555",
      rating: 4.6,
      trips: 23,
      spent: "$287.50",
      joined: "Mar 2024",
      status: "inactive",
      lastTrip: "2 weeks ago"
    },
    {
      id: "RDR-005",
      name: "Leila Mansour",
      avatar: "/riders/leila.jpg",
      email: "leila@example.com",
      phone: "+216 98 555 666",
      rating: 4.95,
      trips: 89,
      spent: "$1,112.50",
      joined: "Nov 2023",
      status: "active",
      lastTrip: "1 hour ago"
    },
    {
      id: "RDR-006",
      name: "Karim Zouari",
      avatar: "/riders/karim.jpg",
      email: "karim@example.com",
      phone: "+216 98 666 777",
      rating: 4.75,
      trips: 54,
      spent: "$675.00",
      joined: "Jan 2024",
      status: "active",
      lastTrip: "3 hours ago"
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'gradient-success text-white'
      case 'inactive':
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
          <h1 className="text-3xl font-bold text-gradient-primary">Riders</h1>
          <p className="text-muted-foreground mt-1">Manage rider accounts and activity</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Riders
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,921</div>
            <p className="text-xs text-green-500 mt-1">+15.3% this month</p>
          </CardContent>
        </Card>

        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Today
            </CardTitle>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground mt-1">13.8% of total</p>
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
            <div className="text-2xl font-bold">4.78</div>
            <p className="text-xs text-green-500 mt-1">+0.03 this month</p>
          </CardContent>
        </Card>

        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spent
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,873</div>
            <p className="text-xs text-green-500 mt-1">+12.5% this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or phone..."
            className="pl-10 glass-light dark:glass"
          />
        </div>
      </div>

      {/* Riders Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {riders.map((rider) => (
          <Card key={rider.id} className="glass-light dark:glass hover:glow-primary transition-all duration-300 animate-scale-in">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={rider.avatar} alt={rider.name} />
                    <AvatarFallback className="gradient-primary text-white">
                      {rider.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{rider.name}</h3>
                    <p className="text-sm text-muted-foreground">{rider.id}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(rider.status)}>
                  {rider.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact */}
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-sm">{rider.email}</p>
                <p className="text-sm text-muted-foreground mt-1">Phone</p>
                <p className="font-medium">{rider.phone}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{rider.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trips</p>
                  <p className="font-semibold">{rider.trips}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Spent</p>
                  <p className="font-semibold text-green-500">{rider.spent}</p>
                </div>
              </div>

              {/* Activity */}
              <div className="pt-2 border-t border-border/50">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-muted-foreground">Joined</p>
                  <p className="text-sm font-medium">{rider.joined}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">Last Trip</p>
                  <p className="text-sm font-medium">{rider.lastTrip}</p>
                </div>
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

