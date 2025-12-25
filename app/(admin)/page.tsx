import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Car,
  MapPin,
  DollarSign,
  ArrowUpRight,
  Activity
} from "lucide-react"

export default function Home() {
  const stats = [
    {
      title: "Total Trips",
      value: "12,543",
      change: "+12.5%",
      trend: "up",
      icon: MapPin,
      color: "primary"
    },
    {
      title: "Active Drivers",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Car,
      color: "accent"
    },
    {
      title: "Total Riders",
      value: "8,921",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "success"
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "-2.4%",
      trend: "down",
      icon: DollarSign,
      color: "warm"
    },
  ]

  const recentTrips = [
    { id: "1", rider: "Ahmed Ben Ali", driver: "Mohamed Salah", status: "completed", amount: "$12.50" },
    { id: "2", rider: "Fatima Hassan", driver: "Youssef Mansour", status: "in_progress", amount: "$8.75" },
    { id: "3", rider: "Sara Ibrahim", driver: "Karim Benzema", status: "completed", amount: "$15.20" },
    { id: "4", rider: "Omar Khaled", driver: "Rami Malek", status: "requested", amount: "$10.00" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
          <Activity className="mr-2 h-4 w-4" />
          Live View
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="glass-light dark:glass hover:glow-primary transition-all duration-300 animate-scale-in">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${
                  stat.color === 'primary' ? 'gradient-primary' :
                  stat.color === 'accent' ? 'bg-accent' :
                  stat.color === 'success' ? 'gradient-success' :
                  'gradient-warm'
                }`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-xs font-medium ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Trips */}
      <Card className="glass-light dark:glass animate-slide-up">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Trips</CardTitle>
              <CardDescription>Latest ride requests and completions</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTrips.map((trip) => (
              <div key={trip.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-white font-semibold">
                    {trip.rider.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{trip.rider}</p>
                    <p className="text-sm text-muted-foreground">Driver: {trip.driver}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={
                    trip.status === 'completed' ? 'default' :
                    trip.status === 'in_progress' ? 'secondary' :
                    'outline'
                  } className={
                    trip.status === 'completed' ? 'gradient-success text-white' :
                    trip.status === 'in_progress' ? 'bg-accent text-white' :
                    ''
                  }>
                    {trip.status.replace('_', ' ')}
                  </Badge>
                  <span className="font-semibold min-w-[60px] text-right">{trip.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
